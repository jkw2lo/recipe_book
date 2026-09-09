/** Step timers: trigger, isolation from check-off, concurrency, controls, persistence. */
const { open, runner } = require("./helper");
const t = runner("timers");
const { $, $$, click, w } = open();

t.section("trigger");
click($$(".card").find(c => c.querySelector("h3").textContent.includes("Tonkatsu")));
const btns = $$("#d-steps .tbtn");
t.eq(btns.length > 0, true, `timer buttons on timed steps (${btns.length})`);
t.eq(btns.every(b => b.tagName === "BUTTON" && Number(b.dataset.mins) > 0), true,
     "each is a real button carrying its minutes");

t.section("does not collide with check-off");
click(btns[2]);
t.eq($$("#timers .tmr").length, 1, "timer started");
t.eq($$("#d-steps li.done").length, 0, "step was NOT crossed off");
click($("#d-steps li .stext"));
t.eq($$("#d-steps li.done").length, 1, "clicking the step body still crosses it off");

t.section("concurrency and controls");
click($$("#d-steps .tbtn")[0]); click($$("#d-steps .tbtn")[1]);
t.eq($$("#timers .tmr").length, 3, "three timers at once");
click($("#timers [data-tt]"));
t.eq($("#timers [data-tt]").textContent, "Resume", "pause flips the label");
const tid = $("#timers .tmr").dataset.tid;
const read = () => JSON.parse(w.localStorage.getItem("recipebook.v2")).timers.find(x => x.id === tid).remain;
const before = read();
click($("#timers [data-tb]"));
t.eq(read() - before, 300, "+5 min adds exactly 300s while paused");
click($("#timers [data-tt]"));
t.eq($$("#timers .tmr.paused").length, 0, "resume clears paused");

t.section("persistence");
const saved = w.localStorage.getItem("recipebook.v2");
t.eq(JSON.parse(saved).timers.length, 3, "timers written to storage");
const reloaded = open({ beforeParse(win) { win.localStorage.setItem("recipebook.v2", saved); } });
t.eq(reloaded.$$("#timers .tmr").length, 3, "running timers survive a reload");

t.section("dismiss");
click($("#timers .tmr-x"));
t.eq($$("#timers .tmr").length, 2, "dismiss removes one");

t.done();

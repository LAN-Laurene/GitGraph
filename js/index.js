var gitgraph = new GitGraph({
  template: "blackarrow",
  orientation: "vertical",
  mode: "expended",
  elementId: "gitGraph",
  author: "Lan",
});

var md = "Un commit"; // message par défault
var colorMaster = "#27e4f9";
var colorStating = "#ffe333";
var colorHotfix = "#fd5965";
var colorRelease = "#52c322";

var master = gitgraph.branch({ name: "master", column: 1});
var staging = gitgraph.branch({name: "staging", column: 5});
var us6170 = staging.branch({name: "US6170-nettoyage_git", column: 6});
var us6115 = staging.branch({name: "US6115-ajout_colonnes_dashboard", column: 7});
var us6145 = staging.branch({name: "US6145-invite_mail", column: 8});
var hotfix131 = master.branch({name: "Hotfix1.3.1-nom_agence_caract_spé", column: 2});
var us6142 = staging.branch({name: "US6142-pixel_tracking_maintenance", column: 6});
var release140 = staging.branch({name: "release1.4.0", column: 3});
var hotfix132 = master.branch({name: "Hotfix1.3.2-nouvelle_api_zoho", column: 2});
var us6178 = staging.branch({name: "US6178-image_certification", column: 7});

/* ***** */
staging.commit({
  message: "Initiate commit",
  dotColor: colorStating,
});

master.commit({
  message: "Commit version 1.3.0",
  tag: "v1.3.0",
  dotColor: colorMaster,
  tagColor: colorMaster,
});

us6170.commit(md);

us6170.commit(md);

us6115.commit(md);

us6145.commit();

us6115.commit(md);

us6170.commit(md);

us6170.merge(staging, {
  tag: "F3156-FreeTrial",
  dotColor: colorStating,
  tagColor: colorStating,
});

us6115.commit(md);

hotfix131.commit({
  message: "HOTFIX 1.3.1 : Correction nom agence avec caractéres spéciaux",
  dotColor: colorHotfix,
});

hotfix131.merge(master, {
  tag: "v1.3.1",
  dotColor: colorMaster,
  tagColor: colorMaster,
});

hotfix131.merge(staging, {
  tag: "v1.3.1",
  dotColor: colorStating,
  tagColor: colorStating,
});

us6115.commit(md);

staging.merge(us6115);

us6145.commit(md);

staging.merge(us6145);

us6115.commit("correction");

us6142.commit(md);

us6115.merge(staging, {
  tag: "F3156-FreeTrial",
  dotColor: colorStating,
  tagColor: colorStating,
});

staging.merge(us6145);

us6145.merge(staging, {
  tag: "F3156-FreeTrial & v1.4.0",
  dotColor: colorStating,
  tagColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Changement du numéro de version.",
  dotColor: colorRelease,
});

release140.merge(staging, {
  dotColor: colorStating,
});

us6142.commit(md);

release140.commit({
  message: "RELEASE 1.4.0 - Commit pour une rapide correction de derniere minute avant la MET",
  dotColor: colorRelease,
});

us6142.commit(md);

release140.merge(staging, {
  dotColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Prendre en compte les changements mineurs suite au retour de test",
  dotColor: colorRelease,
});

us6142.commit(md);

hotfix132.commit({
  message: "HOTFIX 1.3.2 : Changement d'une fonction de l'api zoho",
  dotColor: colorHotfix,
});

hotfix132.merge(master, {
  tag: "v1.3.2",
  dotColor: colorMaster,
  tagColor: colorMaster,
});

us6178.commit(md);

hotfix132.merge(release140, {
  dotColor: colorRelease,
});

release140.merge(staging, {
  dotColor: colorStating,
});

us6142.commit(md);

us6142.merge(staging, {
  tag: "F3160-RSSToEmail",
  dotColor: colorStating,
  tagColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Seconde prise en compte des changements mineurs suite au retour de test",
  dotColor: colorRelease,
});

us6178.commit(md);

release140.merge(staging, {
  dotColor: colorStating,
});

release140.merge(master, {
  tag: "v1.4.0",
  dotColor: colorMaster,
  tagColor: colorMaster,
});

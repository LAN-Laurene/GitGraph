var gitgraph = new GitGraph({
  template: "blackarrow", // blackarrow / metro
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
var colorUs = "#fb3db5";

var master = gitgraph.branch({ name: "MASTER", column: 1, showLabel: false, /*color: colorMaster*/});
var staging = gitgraph.branch({name: "STAGING", column: 5, showLabel: false, /*color: colorStating*/}); // orphanbranch
var us6170 = staging.branch({name: "US6170-nettoyage_git", column: 6, showLabel: false, /*color: colorUs*/});
var us6115 = staging.branch({name: "US6115-ajout_colonnes_dashboard", column: 7, showLabel: false, /*color: colorUs*/});
var us6145 = staging.branch({name: "US6145-invite_mail", column: 8, showLabel: false, /*color: colorUs*/});
var hotfix131 = master.branch({name: "HOTFIX1.3.1-nom_agence_caract_spé", column: 2, showLabel: false, /*color: colorHotfix*/});
var us6142 = staging.branch({name: "US6142-pixel_tracking_maintenance", column: 6, showLabel: false, /*color: colorUs*/});
var release140 = staging.branch({name: "RELEASE1.4.0", column: 3, showLabel: false, /*color: colorRelease*/});
var hotfix132 = master.branch({name: "HOTFIX1.3.2-nouvelle_api_zoho", column: 2, showLabel: false, /*color: colorHotfix*/});
var us6178 = staging.branch({name: "US6178-image_certification", column: 7, showLabel: false, /*color: colorUs*/});

/* ***** */
staging.commit({
  message: "Initiate commit",
  dotColor: colorStating,
  messageColor: colorStating,
});

master.commit({
  message: "Commit version 1.3.0",
  tag: "v1.3.0",
  dotColor: colorMaster,
  tagColor: colorMaster,
  messageColor: colorMaster,
});

us6170.commit({
  message: "US6170 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6170.commit({
  message: "US6170 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6115.commit({
  message: "US6115 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6145.commit({
  message: "US6145 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6115.commit({
  message: "US6115 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6170.commit({
  message: "US6170 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6170.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

us6115.commit({
  message: "US6115 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

hotfix131.commit({
  message: "HOTFIX 1.3.1 : Correction nom agence avec caractéres spéciaux",
  dotColor: colorHotfix,
  messageColor: colorHotfix,
});

hotfix131.merge(master, {
  tag: "v1.3.1",
  dotColor: colorMaster,
  tagColor: colorMaster,
  messageColor: colorMaster,
});

hotfix131.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

us6115.commit({
  message: "US6115 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

staging.merge(us6115, {
  dotColor: colorUs,
  messageColor: colorUs,
});

us6145.commit({
  message: "US6145 coorection suite au hotfix 1.3.1",
  dotColor: colorUs,
  messageColor: colorUs,
});

staging.merge(us6145, {
  dotColor: colorUs,
  messageColor: colorUs,
});

us6115.commit({
  message: "US6145 Correction 1",
  dotColor: colorUs,
  messageColor: colorUs,
});

us6142.commit({
  message: "US6142 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6115.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

staging.merge(us6145, {
  dotColor: colorUs,
  messageColor: colorUs,
});

us6145.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Changement du numéro de version.",
  dotColor: colorRelease,
  messageColor: colorRelease,
});

release140.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

us6142.commit({
  message: "US6142 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

release140.commit({
  message: "RELEASE 1.4.0 - Commit pour une rapide correction de derniere minute avant la MET",
  dotColor: colorRelease,
  messageColor: colorRelease,
});

us6142.commit({
  message: "US6142 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

release140.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Prendre en compte les changements mineurs suite au retour de test",
  dotColor: colorRelease,
  messageColor: colorRelease,
});

us6142.commit({
  message: "US6142 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});
hotfix132.commit({
  message: "HOTFIX 1.3.2 : Changement d'une fonction de l'api zoho",
  dotColor: colorHotfix,
  messageColor: colorHotfix,
});

hotfix132.merge(master, {
  tag: "v1.3.2",
  dotColor: colorMaster,
  tagColor: colorMaster,
  messageColor: colorMaster,
});

us6178.commit({
  message: "US6178 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

hotfix132.merge(release140, {
  dotColor: colorRelease,
  messageColor: colorRelease,
});

release140.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

us6142.commit({
  message: "US6142 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

us6142.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

release140.commit({
  message: "RELEASE 1.4.0 - Seconde prise en compte des changements mineurs suite au retour de test",
  dotColor: colorRelease,
  messageColor: colorRelease,
});

us6178.commit({
  message: "US6178 "+md,
  dotColor: colorUs,
  messageColor: colorUs,
});

release140.merge(staging, {
  dotColor: colorStating,
  messageColor: colorStating,
});

release140.merge(master, {
  tag: "v1.4.0",
  dotColor: colorMaster,
  tagColor: colorMaster,
  messageColor: colorMaster,
});

var gitgraph = new GitGraph({
  template: "blackarrow",
  orientation: "vertical",
  mode: "expended",
  elementId: "gitGraph",
  author: "Lan",
});

var md = "Un commit"; // message par défault
var dotColorMaster = "#27e4f9";

var master = gitgraph.branch({ name: "master", column: 1});
var staging = gitgraph.branch({name: "staging", column: 5});
var us6170 = staging.branch({name: "US6170-nettoyage_git", column: 6});
var us6115 = staging.branch({name: "US6115-ajout_colonnes_dashboard", column: 7});
var us6145 = staging.branch({name: "US6145-invite_mail", column: 8});
var hotfix131 = master.branch({name: "Hotfix1.3.1-nom_agence_caract_spé", column: 2});
var us6142 = staging.branch({name: "US6142-pixel_tracking_maintenance", column: 6});
var release140 = staging.branch({name: "release1.4.0", column: 3});
var hotfix132 = master.branch({name: "Hotfix1.3.2-nouvelle_api_zoho", column: 2});


/* ***** */
staging.commit("Initiate commit");

master.commit({
  message: "Commit version 1.3.0",
  tag: "v1.3.0",
  dotColor: dotColorMaster,
  tagColor: dotColorMaster,
});

us6170.commit(md);

us6170.commit(md);

us6115.commit(md);

us6145.commit();

us6115.commit(md);

us6170.commit(md);

us6170.merge(staging);

us6115.commit(md);

hotfix131.commit("commit de hotfix");

hotfix131.merge(master, {
  tag: "v1.3.1",
  dotColor: dotColorMaster,
  tagColor: dotColorMaster,
});

hotfix131.merge(staging);

us6115.commit(md);

staging.merge(us6115);

us6145.commit(md);

staging.merge(us6145);

us6115.commit("correction");

us6142.commit(md);

us6115.merge(staging);

staging.merge(us6145);

us6145.merge(staging);

release140.commit("changement du numéro de version.");

release140.merge(staging);

us6142.commit(md);

release140.commit("commit pour une rapide correction de derniere minute avant la MET");

us6142.commit(md);

release140.merge(staging);

release140.commit("prendre en compte les changements mineurs suite au retour de test");

us6142.commit(md);

hotfix132.commit("hotfix-");

hotfix132.merge(master, {
  tag: "v1.3.2",
  dotColor: dotColorMaster,
  tagColor: dotColorMaster,
});

hotfix132.merge(release140);

release140.merge(staging);

us6142.commit(md);

release140.commit("prendre en compte les changements mineurs suite au retour de test");

release140.merge(staging);

release140.merge(master, {
  tag: "v1.4.0",
  dotColor: dotColorMaster,
  tagColor: dotColorMaster,
});

us6142.merge(staging);

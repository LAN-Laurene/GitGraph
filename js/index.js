var gitgraph = new GitGraph({
  template: "blackarrow",
  orientation: "vertical",
  mode: "expended",
  elementId: "gitGraph",
  author: "Lan",
});

var md = "Un commit"; // message par défault

var master = gitgraph.branch("master");

var hotfix131 = master.branch("Hotfix1.3.1-nom_agence_caract_spé");
var hotfix132 = master.branch("Hotfix1.3.2-nouvelle_api_zoho");

var staging = gitgraph.branch("staging");

var release140 = staging.branch("release1.4.0");

staging.commit("Initiate commit");

master.commit(md);

var us6170 = staging.branch("US6170-nettoyage_git");
us6170.commit(md);
us6170.commit(md);

var us6115 = staging.branch("US6115-ajout_colonnes_dashboard");
us6115.commit(md);

var us6145 = staging.branch("US6145-invite_mail");
us6145.commit();

us6115.commit(md);

us6170.commit(md);

us6170.merge(staging);

us6115.commit(md);

hotfix131.commit("commit de hotfix");

hotfix131.merge(master);
hotfix131.merge(staging);

us6115.commit(md);

staging.merge(us6115);

us6145.commit(md);

staging.merge(us6145);

us6115.commit("correction");

var us6142 = staging.branch("US6142-pixel_tracking_maintenance");

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

hotfix132.merge(master);

hotfix132.merge(release140);

release140.merge(staging);

us6142.commit(md);

release140.commit("prendre en compte les changements mineurs suite au retour de test");

release140.merge(staging);

release140.merge(master);

us6142.merge(staging);

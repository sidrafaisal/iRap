var AppRouter = Backbone.Router.extend({

    routes: {
        "about"             : "about",
        "demo"              : "demo",
        "evaluation"        : "evaluation"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },
    
    demo: function () {
        if (!this.demoView) {
            this.demoView = new DemoView();
        }
        $('#content').html(this.demoView.el);
        this.headerView.selectMenuItem('demo-menu');
    },

    evaluation: function () {
        if (!this.evaluationView) {
            this.evaluationView = new EvaluationView();
        }
        $('#content').html(this.evaluationView.el);
        this.headerView.selectMenuItem('evaluation-menu');
    }

});

utils.loadTemplate(['HeaderView', 'AboutView', 'DemoView', 'EvaluationView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
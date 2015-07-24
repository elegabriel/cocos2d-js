/**
 * Created by ele on 7/22/15.
 */

var MyActionLayer = cc.Layer.extend({
    flagTag : 0,
    pLable : null,
    ctor: function (flagTag) {
        this._super();
        this.flagTag = flagTag;

        cc.log("MyAcitonLayer init flagTag "+this.flagTag);

        var size = cc.director.getWinSize();

        var backMenuItem = new cc.LabelBMFont("<Back",res.fnt_fnt);
        var backMenuItem = new cc.MenuItemLabel(backMenuItem, this.backMenu, this);
        backMenuItem.x = size.width - 100;
        backMenuItem.y = 100;

        var mn = new cc.Menu(backMenuItem);
        mn.x = 0;
        mn.y = 0;
        mn.anchorX = 0.5;
        mn.anchorY = 0.5;
        this.addChild(mn);

        this.pLable = new cc.LabelBMFont("", res.fnt_fnt);
        this.pLable.x = size.width/2;
        this.pLable.y = size.height -50;
        this.addChild(this.pLable, 3);

        return true;


    },
    backMenu:function(sender){
        cc.director.popScene();
    },
    onEnterTransitionDidFinish:function(){
        cc.log("Tag = "+this.flagTag);
        var sprite = this.getChildByTag(SP_TAG);//
        var size = cc.director.getWinSize();

        var system;
        switch(this.flagTag){
            case ActionTypes.kExplosion:
                system = new cc.ParticleExplosion();
                this.pLable.setString("Explosion");
                break;
            case ActionTypes.kFire:
                system = new cc.ParticleExplosion();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Fire");
                break;
            case ActionTypes.kFireworks:
                system = new cc.ParticleFireworks();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Fireworks");
                break;
            case ActionTypes.kFlower:
                system = new cc.ParticleFlower();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Flower");
                break;
            case ActionTypes.kGalaxy:
                system = new cc.ParticleGalaxy();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Galaxy");
                break;
            case ActionTypes.kMeteor:
                system = new cc.ParticleMeteor();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Meteor");
                break;
            case ActionTypes.kRain:
                system = new cc.ParticleRain();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Rain");
                break;
            case ActionTypes.kSmoke:
                system = new cc.ParticleSmoke();
                system.texture = cc.textureCache.addImage(res.s_fire);
                this.pLable.setString("Smoke");
                break;
            case ActionTypes.kSnow:
                system = new cc.ParticleSnow();
                system.texture = cc.textureCache.addImage(res.s_snow);
                this.pLable.setString("Snow");
                break;
            case ActionTypes.kSpiral:
                system = new cc.ParticleSpiral();
                this.pLable.setString("Spiral");
                break;
            case ActionTypes.kSun:
                system = new cc.ParticleSun();
                this.pLable.setString("Sun");
                break;
        }

        system.x = size.width/2;
        system.y = size.height/2;

        this.addChild(system);


    }
});

var MyActionScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
    }
});


'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-public-admin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-d9b2ce708af065b0df5586122f849a3c44b99304d6e9c0fb45f50c5ae143a3982e66709a742dc76db22a137dfa96364e2941b2db8537190413fba63763af1111"' : 'data-bs-target="#xs-components-links-module-AdminModule-d9b2ce708af065b0df5586122f849a3c44b99304d6e9c0fb45f50c5ae143a3982e66709a742dc76db22a137dfa96364e2941b2db8537190413fba63763af1111"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-d9b2ce708af065b0df5586122f849a3c44b99304d6e9c0fb45f50c5ae143a3982e66709a742dc76db22a137dfa96364e2941b2db8537190413fba63763af1111"' :
                                            'id="xs-components-links-module-AdminModule-d9b2ce708af065b0df5586122f849a3c44b99304d6e9c0fb45f50c5ae143a3982e66709a742dc76db22a137dfa96364e2941b2db8537190413fba63763af1111"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarrePlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarrePlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-033d59eb0f1bbf0f098ed90397b1f01038a2588dde28b4ec3e395742766db47fbc2a6b241f74c060786ae2c795d2d501df2eedda986d93a97f42dbe8e3665ae4"' : 'data-bs-target="#xs-components-links-module-AppModule-033d59eb0f1bbf0f098ed90397b1f01038a2588dde28b4ec3e395742766db47fbc2a6b241f74c060786ae2c795d2d501df2eedda986d93a97f42dbe8e3665ae4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-033d59eb0f1bbf0f098ed90397b1f01038a2588dde28b4ec3e395742766db47fbc2a6b241f74c060786ae2c795d2d501df2eedda986d93a97f42dbe8e3665ae4"' :
                                            'id="xs-components-links-module-AppModule-033d59eb0f1bbf0f098ed90397b1f01038a2588dde28b4ec3e395742766db47fbc2a6b241f74c060786ae2c795d2d501df2eedda986d93a97f42dbe8e3665ae4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleModule.html" data-type="entity-link" >ArticleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ArticleModule-08069e0ad670327b168ed4f831d9b4d417c12403304e80e0bd6a2c4e07f625b318a83272acf5477f4680fa2321e38e2f156c0e049c8e2ef764c129e92d6190b5"' : 'data-bs-target="#xs-components-links-module-ArticleModule-08069e0ad670327b168ed4f831d9b4d417c12403304e80e0bd6a2c4e07f625b318a83272acf5477f4680fa2321e38e2f156c0e049c8e2ef764c129e92d6190b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleModule-08069e0ad670327b168ed4f831d9b4d417c12403304e80e0bd6a2c4e07f625b318a83272acf5477f4680fa2321e38e2f156c0e049c8e2ef764c129e92d6190b5"' :
                                            'id="xs-components-links-module-ArticleModule-08069e0ad670327b168ed4f831d9b4d417c12403304e80e0bd6a2c4e07f625b318a83272acf5477f4680fa2321e38e2f156c0e049c8e2ef764c129e92d6190b5"' }>
                                            <li class="link">
                                                <a href="components/ADeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ADeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleRoutingModule.html" data-type="entity-link" >ArticleRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-f1bfb2eb3088870e7f4b7a234fb0f1b561596ae4ed0d46d7767f67ca44a408e183d36ca89d2198f51af47cc4d97f7896a4ee7aa706802d5a606d7afe18fb3079"' : 'data-bs-target="#xs-components-links-module-AuthModule-f1bfb2eb3088870e7f4b7a234fb0f1b561596ae4ed0d46d7767f67ca44a408e183d36ca89d2198f51af47cc4d97f7896a4ee7aa706802d5a606d7afe18fb3079"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-f1bfb2eb3088870e7f4b7a234fb0f1b561596ae4ed0d46d7767f67ca44a408e183d36ca89d2198f51af47cc4d97f7896a4ee7aa706802d5a606d7afe18fb3079"' :
                                            'id="xs-components-links-module-AuthModule-f1bfb2eb3088870e7f4b7a234fb0f1b561596ae4ed0d46d7767f67ca44a408e183d36ca89d2198f51af47cc4d97f7896a4ee7aa706802d5a606d7afe18fb3079"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EvenementsModule.html" data-type="entity-link" >EvenementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EvenementsModule-1ddc77bde7a0eed6225b6f8a01796542d5f4f0060330637db067e52803e841b653895e761773de16a5ee83396441a0663e05fbf96daa91611a06a0925a7be022"' : 'data-bs-target="#xs-components-links-module-EvenementsModule-1ddc77bde7a0eed6225b6f8a01796542d5f4f0060330637db067e52803e841b653895e761773de16a5ee83396441a0663e05fbf96daa91611a06a0925a7be022"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EvenementsModule-1ddc77bde7a0eed6225b6f8a01796542d5f4f0060330637db067e52803e841b653895e761773de16a5ee83396441a0663e05fbf96daa91611a06a0925a7be022"' :
                                            'id="xs-components-links-module-EvenementsModule-1ddc77bde7a0eed6225b6f8a01796542d5f4f0060330637db067e52803e841b653895e761773de16a5ee83396441a0663e05fbf96daa91611a06a0925a7be022"' }>
                                            <li class="link">
                                                <a href="components/EAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EvenementsRoutingModule.html" data-type="entity-link" >EvenementsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-d17d3a75519c848f0526ee63f5f8a88740febe519630d781a107af0b46b4e571ad451ca9e4cad1ffd655ba3de9712f37c8dfab99e33ec8f32e5eef4facdc846f"' : 'data-bs-target="#xs-components-links-module-PublicModule-d17d3a75519c848f0526ee63f5f8a88740febe519630d781a107af0b46b4e571ad451ca9e4cad1ffd655ba3de9712f37c8dfab99e33ec8f32e5eef4facdc846f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-d17d3a75519c848f0526ee63f5f8a88740febe519630d781a107af0b46b4e571ad451ca9e4cad1ffd655ba3de9712f37c8dfab99e33ec8f32e5eef4facdc846f"' :
                                            'id="xs-components-links-module-PublicModule-d17d3a75519c848f0526ee63f5f8a88740febe519630d781a107af0b46b4e571ad451ca9e4cad1ffd655ba3de9712f37c8dfab99e33ec8f32e5eef4facdc846f"' }>
                                            <li class="link">
                                                <a href="components/ArticleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvenementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvenementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterPlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterPlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarrePlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarrePlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' : 'data-bs-target="#xs-components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' :
                                            'id="xs-components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AAddComponent.html" data-type="entity-link" >AAddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AEditComponent.html" data-type="entity-link" >AEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavBarrePlayoutComponent-1.html" data-type="entity-link" >NavBarrePlayoutComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/Auth2Guard.html" data-type="entity-link" >Auth2Guard</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
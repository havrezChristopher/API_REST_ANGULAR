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
                                            'data-bs-target="#components-links-module-AdminModule-f70512d14391c1c6321deca3b9ed0abbb59d8746332649c682202cb87416f90dd5907df2e9bc5d628a16f8ac2625df793f9adf5ce5092a1e4d265380e6f2edc4"' : 'data-bs-target="#xs-components-links-module-AdminModule-f70512d14391c1c6321deca3b9ed0abbb59d8746332649c682202cb87416f90dd5907df2e9bc5d628a16f8ac2625df793f9adf5ce5092a1e4d265380e6f2edc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-f70512d14391c1c6321deca3b9ed0abbb59d8746332649c682202cb87416f90dd5907df2e9bc5d628a16f8ac2625df793f9adf5ce5092a1e4d265380e6f2edc4"' :
                                            'id="xs-components-links-module-AdminModule-f70512d14391c1c6321deca3b9ed0abbb59d8746332649c682202cb87416f90dd5907df2e9bc5d628a16f8ac2625df793f9adf5ce5092a1e4d265380e6f2edc4"' }>
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
                                            'data-bs-target="#components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' : 'data-bs-target="#xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' :
                                            'id="xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
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
                                            'data-bs-target="#components-links-module-ArticleModule-2fe7b0560137d986b28da1537388f6bdf5b54b09afa5d4294a2aaf23963c56def76c76e71de18ef5fe8878ce152ef9ac9933fe318765f0b792284f31abfd7068"' : 'data-bs-target="#xs-components-links-module-ArticleModule-2fe7b0560137d986b28da1537388f6bdf5b54b09afa5d4294a2aaf23963c56def76c76e71de18ef5fe8878ce152ef9ac9933fe318765f0b792284f31abfd7068"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleModule-2fe7b0560137d986b28da1537388f6bdf5b54b09afa5d4294a2aaf23963c56def76c76e71de18ef5fe8878ce152ef9ac9933fe318765f0b792284f31abfd7068"' :
                                            'id="xs-components-links-module-ArticleModule-2fe7b0560137d986b28da1537388f6bdf5b54b09afa5d4294a2aaf23963c56def76c76e71de18ef5fe8878ce152ef9ac9933fe318765f0b792284f31abfd7068"' }>
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
                                            'data-bs-target="#components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' : 'data-bs-target="#xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' :
                                            'id="xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
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
                                            'data-bs-target="#components-links-module-EvenementsModule-3802e5b0584a587300a8a566c3fe4a90b85b7c77f3cff8e277630672460678c06ca13272e38334698862bd7894492352286040a80ef5a5c8aafc4b4f6e98799e"' : 'data-bs-target="#xs-components-links-module-EvenementsModule-3802e5b0584a587300a8a566c3fe4a90b85b7c77f3cff8e277630672460678c06ca13272e38334698862bd7894492352286040a80ef5a5c8aafc4b4f6e98799e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EvenementsModule-3802e5b0584a587300a8a566c3fe4a90b85b7c77f3cff8e277630672460678c06ca13272e38334698862bd7894492352286040a80ef5a5c8aafc4b4f6e98799e"' :
                                            'id="xs-components-links-module-EvenementsModule-3802e5b0584a587300a8a566c3fe4a90b85b7c77f3cff8e277630672460678c06ca13272e38334698862bd7894492352286040a80ef5a5c8aafc4b4f6e98799e"' }>
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
                                            'data-bs-target="#components-links-module-PublicModule-2b416a1d56a9db62659530c1a06d1918bbb1d6f1a758c9623950bf630a6c2a4558d37fe565bc90ec929cbb8c92fa20710aed1bfc33afcb6929f37ed57a9b788c"' : 'data-bs-target="#xs-components-links-module-PublicModule-2b416a1d56a9db62659530c1a06d1918bbb1d6f1a758c9623950bf630a6c2a4558d37fe565bc90ec929cbb8c92fa20710aed1bfc33afcb6929f37ed57a9b788c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-2b416a1d56a9db62659530c1a06d1918bbb1d6f1a758c9623950bf630a6c2a4558d37fe565bc90ec929cbb8c92fa20710aed1bfc33afcb6929f37ed57a9b788c"' :
                                            'id="xs-components-links-module-PublicModule-2b416a1d56a9db62659530c1a06d1918bbb1d6f1a758c9623950bf630a6c2a4558d37fe565bc90ec929cbb8c92fa20710aed1bfc33afcb6929f37ed57a9b788c"' }>
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
                                            'data-bs-target="#components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' : 'data-bs-target="#xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' :
                                            'id="xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
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
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
                    <a href="index.html" data-type="index-link">some-project documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-56a4ae05b624a6a96cf2d5b8611e5053912e224f5f935e7f49eaac7fdf940d036e86e644c7979d5b15b2aaecc8b40918c4bf860502142ace230e9afcf3b9a56f"' : 'data-target="#xs-components-links-module-AdminModule-56a4ae05b624a6a96cf2d5b8611e5053912e224f5f935e7f49eaac7fdf940d036e86e644c7979d5b15b2aaecc8b40918c4bf860502142ace230e9afcf3b9a56f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-56a4ae05b624a6a96cf2d5b8611e5053912e224f5f935e7f49eaac7fdf940d036e86e644c7979d5b15b2aaecc8b40918c4bf860502142ace230e9afcf3b9a56f"' :
                                            'id="xs-components-links-module-AdminModule-56a4ae05b624a6a96cf2d5b8611e5053912e224f5f935e7f49eaac7fdf940d036e86e644c7979d5b15b2aaecc8b40918c4bf860502142ace230e9afcf3b9a56f"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
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
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b1bad714b829128939f99864b284523873a36148132b584b8559bbab6fc669737ef3c8099b8e05f3001351e023f40f0a79baec150c7c851b145aa7aef128995c"' : 'data-target="#xs-components-links-module-AppModule-b1bad714b829128939f99864b284523873a36148132b584b8559bbab6fc669737ef3c8099b8e05f3001351e023f40f0a79baec150c7c851b145aa7aef128995c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b1bad714b829128939f99864b284523873a36148132b584b8559bbab6fc669737ef3c8099b8e05f3001351e023f40f0a79baec150c7c851b145aa7aef128995c"' :
                                            'id="xs-components-links-module-AppModule-b1bad714b829128939f99864b284523873a36148132b584b8559bbab6fc669737ef3c8099b8e05f3001351e023f40f0a79baec150c7c851b145aa7aef128995c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-dff16b07dd2839d97c0fd5fc0973cddacec1bcada9824f44e5c892b7038bffab16e2a798a477ffe4da884cfba9d78574b8449213a6295bb311e13acfc78cfe60"' : 'data-target="#xs-components-links-module-AuthModule-dff16b07dd2839d97c0fd5fc0973cddacec1bcada9824f44e5c892b7038bffab16e2a798a477ffe4da884cfba9d78574b8449213a6295bb311e13acfc78cfe60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-dff16b07dd2839d97c0fd5fc0973cddacec1bcada9824f44e5c892b7038bffab16e2a798a477ffe4da884cfba9d78574b8449213a6295bb311e13acfc78cfe60"' :
                                            'id="xs-components-links-module-AuthModule-dff16b07dd2839d97c0fd5fc0973cddacec1bcada9824f44e5c892b7038bffab16e2a798a477ffe4da884cfba9d78574b8449213a6295bb311e13acfc78cfe60"' }>
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
                                <a href="modules/MoviesModule.html" data-type="entity-link" >MoviesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MoviesModule-a46f23da09d32190f3ee87491d4f6e583323a7422eb14a9db07315d3bb6585b0e92dc939f186fceebce30c36f62479b77b3f2735c24e64c0c7d7318795ff217f"' : 'data-target="#xs-components-links-module-MoviesModule-a46f23da09d32190f3ee87491d4f6e583323a7422eb14a9db07315d3bb6585b0e92dc939f186fceebce30c36f62479b77b3f2735c24e64c0c7d7318795ff217f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoviesModule-a46f23da09d32190f3ee87491d4f6e583323a7422eb14a9db07315d3bb6585b0e92dc939f186fceebce30c36f62479b77b3f2735c24e64c0c7d7318795ff217f"' :
                                            'id="xs-components-links-module-MoviesModule-a46f23da09d32190f3ee87491d4f6e583323a7422eb14a9db07315d3bb6585b0e92dc939f186fceebce30c36f62479b77b3f2735c24e64c0c7d7318795ff217f"' }>
                                            <li class="link">
                                                <a href="components/MoviesaddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesaddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesdeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesdeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieseditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieseditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesindexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesindexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesRoutingModule.html" data-type="entity-link" >MoviesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-26395a3a32af28f81a97b0fda7f685bd6a73b4a0aaf9abfbf5b34d3e6b88152abdc582667ef4b353b1e7996b0b45ecf2a5a00812c0bfa93b5184979e05b0de6e"' : 'data-target="#xs-components-links-module-PublicModule-26395a3a32af28f81a97b0fda7f685bd6a73b4a0aaf9abfbf5b34d3e6b88152abdc582667ef4b353b1e7996b0b45ecf2a5a00812c0bfa93b5184979e05b0de6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-26395a3a32af28f81a97b0fda7f685bd6a73b4a0aaf9abfbf5b34d3e6b88152abdc582667ef4b353b1e7996b0b45ecf2a5a00812c0bfa93b5184979e05b0de6e"' :
                                            'id="xs-components-links-module-PublicModule-26395a3a32af28f81a97b0fda7f685bd6a73b4a0aaf9abfbf5b34d3e6b88152abdc582667ef4b353b1e7996b0b45ecf2a5a00812c0bfa93b5184979e05b0de6e"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesComponent</a>
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
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-500b0f2a40c12cc388763e99cfae79df94fc660e16a18621a0414b3dcb5e2c0bfed295e990e147ea888b29d2930730dbd7fea73d6586f31f8a305943c260ee24"' : 'data-target="#xs-components-links-module-UserModule-500b0f2a40c12cc388763e99cfae79df94fc660e16a18621a0414b3dcb5e2c0bfed295e990e147ea888b29d2930730dbd7fea73d6586f31f8a305943c260ee24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-500b0f2a40c12cc388763e99cfae79df94fc660e16a18621a0414b3dcb5e2c0bfed295e990e147ea888b29d2930730dbd7fea73d6586f31f8a305943c260ee24"' :
                                            'id="xs-components-links-module-UserModule-500b0f2a40c12cc388763e99cfae79df94fc660e16a18621a0414b3dcb5e2c0bfed295e990e147ea888b29d2930730dbd7fea73d6586f31f8a305943c260ee24"' }>
                                            <li class="link">
                                                <a href="components/UseraddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UseraddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserdeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserdeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsereditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsereditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserindexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserindexComponent</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
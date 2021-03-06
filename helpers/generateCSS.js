function generateCSS() {
    return `
    .card { 
            margin: auto;
            width: 100%;
            border: 0px;
            width: 100%
        }
        
        .card-header {
                background-color:  #2C001E;
                color: white;
                border: 0px;
                width: 100%
            }
        
            .card-body{
                background: #AEA79F;
                margin: auto;
                width: 100%;
            }
        
            .card-columns {
                @include media-breakpoint-only(lg) {
                    column-count: 4;
                }
            }
        
            .main {
                background: #5E2750;
            }
        
        html,
        body {
                    background: #5E2750;
                }`

}

module.exports = generateCSS
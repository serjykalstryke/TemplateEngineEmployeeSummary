function generateCSS() {
    return `.card { 
        margin: auto;
        width: 100%
    }
    
    .card-header {
            background-color:  #2C001E;
            color: white
        }
    
        .card-body{
            background: #AEA79F;
            margin: auto;
            width: 100%
        }
    
        .card-columns {
            @include media-breakpoint-only(lg) {
                column-count: 4;
            }
        }
    
        .main {
            background: #5E2750;
            border-radius: 10%
        }
    
    html,
    body {
                margin: 20px;
                background: #E95420
            }`

}

module.exports = generateCSS
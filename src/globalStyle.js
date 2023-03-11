import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
 	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
  
}
#___gatsby, #gatsby-focus-wrapper {
  all: inherit;
}

html{
  overflow-y: scroll;
}

.horizontal-slider {
        width: 100%;
        max-width: 500px;
        height: 50px;
        border: 1px solid grey;
    }
    .vertical-slider {
        height: 380px;
        width: 50px;
        border: 1px solid grey;
    }
    .example-thumb {
        font-size: 0.9em;
        text-align: center;
        background-color: black;
        color: white;
        cursor: pointer;
        border: 5px solid gray;
        box-sizing: border-box;
    }
    .example-thumb.active {
        background-color: grey;
    }
    .example-track {
        position: relative;
        background: #ddd;
    }
    .example-track.example-track-1 {
        background: #f00;
    }
    .example-track.example-track-2 {
        background: #0f0;
    }
    .example-mark {
        width: 8px;
        height: 8px;
        border: 2px solid #000;
        background-color: #fff;
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
    }
    .horizontal-slider .example-track {
        top: 20px;
        height: 10px;
    }
    .horizontal-slider .example-thumb {
        top: 1px;
        width: 50px;
        height: 48px;
        line-height: 38px;
    }
    .horizontal-slider .example-mark {
        margin: 0 calc(25px - 6px);
        bottom: calc(50% - 6px);
    }
    .vertical-slider .example-thumb {
        left: 1px;
        width: 48px;
        line-height: 40px;
        height: 50px;
    }
    .vertical-slider .example-track {
        left: 20px;
        width: 10px;
    }
    .vertical-slider .example-mark {
        margin: calc(25px - 6px) 0;
        left: calc(50% - 6px);
    }

    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`
export default GlobalStyle

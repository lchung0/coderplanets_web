import styled from 'styled-components'
import { theme } from '@utils'

const MarkDownStyle = styled.div`
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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);
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: ${theme('markdown.fg')};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    line-height: 1.7;
    word-wrap: break-word;
  }

  .markdown-body .pl-c {
    color: #6a737d;
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: #005cc5;
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: #6f42c1;
  }

  .markdown-body .pl-smi,
  .markdown-body .pl-s .pl-s1 {
    color: #24292e;
  }

  .markdown-body .pl-ent {
    color: #22863a;
  }

  .markdown-body .pl-k {
    color: #d73a49;
  }

  .markdown-body .pl-s,
  .markdown-body .pl-pds,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sre,
  .markdown-body .pl-sr .pl-sra {
    color: #032f62;
  }

  .markdown-body .pl-v,
  .markdown-body .pl-smw {
    color: #e36209;
  }

  .markdown-body .pl-bu {
    color: #b31d28;
  }

  .markdown-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .markdown-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .markdown-body .pl-c2::before {
    content: '^M';
  }

  .markdown-body .pl-sr .pl-cce {
    font-weight: bold;
    color: #22863a;
  }

  .markdown-body .pl-ml {
    color: #735c0f;
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    font-weight: bold;
    color: #005cc5;
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .markdown-body .pl-mb {
    font-weight: bold;
    color: #24292e;
  }

  .markdown-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .markdown-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .markdown-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .markdown-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .markdown-body .pl-mdr {
    font-weight: bold;
    color: #6f42c1;
  }

  .markdown-body .pl-ba {
    color: #586069;
  }

  .markdown-body .pl-sg {
    color: #959da5;
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .markdown-body .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }

  .markdown-body a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body strong {
    font-weight: inherit;
  }

  .markdown-body strong {
    color: ${theme('markdown.strongFg')};
    background-color: ${theme('markdown.strongBg')};
    padding: 0 5px;
  }

  .markdown-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  .markdown-body img {
    border-style: none;
  }

  .markdown-body svg:not(:root) {
    overflow: hidden;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre {
    font-family: monospace, monospace;
    font-size: 1.2rem;
  }

  .markdown-body hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
  }

  .markdown-body input {
    overflow: visible;
  }

  .markdown-body [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body a {
    color: ${theme('markdown.link')};
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    border: 0;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('markdown.hrColor')};
  }

  .markdown-body hr::before {
    display: table;
    content: '';
  }

  .markdown-body hr::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme('markdown.title')};
  }

  .markdown-body h1 {
    font-size: 32px;
    font-weight: 600;
  }

  .markdown-body h2 {
    font-size: 24px;
    font-weight: 600;
  }

  .markdown-body h3 {
    font-size: 20px;
    font-weight: 600;
  }

  .markdown-body h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .markdown-body h5 {
    font-size: 14px;
    font-weight: 600;
  }

  .markdown-body h6 {
    font-size: 12px;
    font-weight: 600;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
  }

  .markdown-body ul,
  .markdown-body ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ul ul ol,
  .markdown-body ul ol ol,
  .markdown-body ol ul ol,
  .markdown-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-size: 12px;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-size: 1.2rem;
  }

  .markdown-body .octicon {
    vertical-align: text-bottom;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .pl-3 {
    padding-left: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body p,
  .markdown-body blockquote,
  .markdown-body ul,
  .markdown-body ol,
  .markdown-body dl,
  .markdown-body table,
  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body hr {
    height: 1px;
    padding: 0;
    margin: 24px 0;
    background-color: ${theme('markdown.br')};
    border: 0;
  }

  .markdown-body blockquote {
    padding: 0 1em;
    color: ${theme('markdown.blockquoteFg')};
    border-left: 0.25em solid;
    border-left-color: ${theme('markdown.blockquoteBorder')};
    font-style: italic;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .markdown-body h1 {
    padding-bottom: 0.3em;
    font-size: 1.8em;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('markdown.titleBottom')};
  }

  .markdown-body h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('markdown.titleBottom')};
  }

  .markdown-body h3 {
    font-size: 1.25em;
  }

  .markdown-body h4 {
    font-size: 1em;
  }

  .markdown-body h5 {
    font-size: 0.875em;
  }

  .markdown-body h6 {
    font-size: 0.85em;
    color: ${theme('markdown.title')};
  }

  .markdown-body ul,
  .markdown-body ol {
    padding-left: 1.2em !important;
  }

  .markdown-body ol {
    display: block;
    list-style-type: decimal;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  .markdown-body ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  .markdown-body ul ul,
  .markdown-body ul ol,
  .markdown-body ol ol,
  .markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  .markdown-body table th {
    font-weight: 600;
  }

  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: ${theme('markdown.tableborder')};
  }

  .markdown-body table tr {
    background-color: ${theme('markdown.tableBg')};
    border-top: ${theme('markdown.tableborder')};
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: ${theme('markdown.tableBg2n')};
  }

  .markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    // i add: center the img
    // display: block;
    //  margin-left: auto;
    // margin-right: auto;
  }

  .markdown-body img[align='right'] {
    padding-left: 20px;
  }

  .markdown-body img[align='left'] {
    padding-right: 20px;
  }

  .markdown-body code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: ${theme('code.bg')};
    border-radius: 3px;
  }

  .markdown-body code::before,
  .markdown-body code::after {
    letter-spacing: -0.2em;
    content: '\00a0';
  }

  .markdown-body pre {
    word-wrap: normal;
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: ${theme('code.bg')};
    border-radius: 3px;
  }

  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .markdown-body pre code::before,
  .markdown-body pre code::after {
    content: normal;
  }

  .markdown-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
  }

  .markdown-body :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .markdown-body hr {
    border-bottom-color: ${theme('markdown.hrColor')};
  }

  .markdown-body .task-done {
    margin-left: -1.2em;
    list-style-type: none;

    &:before {
      content: '[o]';
      color: ${theme('markdown.taskDone')};
      margin-right: 0.5em;
    }
  }

  .markdown-body .task-pending {
    margin-left: -1.2em;
    list-style-type: none;

    &:before {
      content: '[-]';
      color: ${theme('markdown.taskPeding')};
      margin-right: 0.5em;
    }
  }
`

export default MarkDownStyle

/*
   background: #0A2A35;
   margin-top: 0;
   margin-bottom: 0;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 0.6em;
   color: #3B6E9D;
 */
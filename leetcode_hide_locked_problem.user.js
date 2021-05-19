// ==UserScript==
// @name         LeetCode hide locked problem
// @namespace    https://github.com/fruit-in/leetcode-hide-locked-problem
// @version      0.2
// @description  hide locked problems on LeetCode
// @author       fruit-in
// @license      MIT License
// @match        https://leetcode.com/problemset/*/*
// @match        https://leetcode-cn.com/problemset/*/*
// @icon         https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png
// @grant        none
// ==/UserScript==

window.onload = function() {
    'use strict';
    let problemset = document.querySelector('.reactable-data');
    if (location.host == "leetcode.com") {
        for (let i = problemset.childElementCount - 1; i >= 0; i--) {
            if (problemset.children[i].children[2].children[0].children[1]) {
                problemset.children[i].remove();
            }
        }
    } else if (location.host == "leetcode-cn.com") {
        for (let i = problemset.childElementCount - 1; i >= 0; i--) {
            if (problemset.children[i].children[0].children[0].children[0]) {
                problemset.children[i].remove();
            }
        }
    }
};

import "/components/tl-header/element.mjs";
import "/components/tl-footer/element.mjs";
import instructions from "./instructions.mjs";

window.onload = event => {
    const fragment = document.createDocumentFragment();
    const article = document.querySelector('article');

    for (let i = 0; i < 20; i++) {
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const textarea = document.createElement('textarea');
        const button = document.createElement('button');
        
        h2.textContent = `Step ${i + 1}:`;
        img.src = `${i + 1}.PNG`;
        textarea.value = instructions[i];
        button.textContent = "Copy Text";

        button.onclick = async event => {
            await navigator.clipboard.writeText(textarea.value);
            event.target.textContent = "Copied!";
        }

        article.append(h2, img, textarea, button);
    }
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LZ0S4CE49V');
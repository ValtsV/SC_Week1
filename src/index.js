import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const editor = new Editor({
  element: document.querySelector('.textEditor'),
  extensions: [
    StarterKit.configure({
        heading: {
            levels: [1,2]
        }
    }),
  ],
  editorProps: {
      attributes: {
          class: "make-prose-mirror-taller make-p-gray p-3 m-3 bg-[#F0F0F3] border border-[#E6E6EA] rounded-[8px]",
      }
  },
  content: '<p>Escribe una respuesta</p>',
})


const boldBtn = document.querySelector('#bold-btn');

boldBtn.addEventListener('click', () => {
    editor.chain().focus().toggleBold().run()
});

const prePregunta = document.querySelector('#pre-pregunta-box');

const postPregunta = document.querySelector('#post-pregunta-box');


prePregunta.addEventListener('click', () => {
    removePrePreguntaBox();
});

const removePrePreguntaBox = () => {
    prePregunta.classList.add("hidden");
    postPregunta.classList.remove("hidden");
    prePregunta.removeEventListener("click", removePrePreguntaBox);
}



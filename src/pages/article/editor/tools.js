import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import {imageService} from "services";
import config from "../../../config";

const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    config: {
      placeholder: 'Write your story . .',
    },
    inlineToolbar: true
  },
  header: {
    class: Header,
    config: {
      defaultLevel: 2
    }
  },

  list: {
    class: List,
    inlineToolbar: true
  },
  // linkTool: LinkTool,
  table: {
    class: Table,
    inlineToolbar: true
  },
  simpleImage: {
    class: SimpleImage,
    inlineToolbar: true
  },
  image: {
    class: Image,
    config: {
      field: 'file',
      uploader: {
        uploadByFile(file) {
          return imageService.upload(file).then(result => {
            return {
              success: 1,
              file: {
                url: `${config.apiUrl}/images/${result.data}`,
              }
            };
          })
        }
      }
    },
    inlineToolbar: true
  },
  quote: {
    class: Quote,
    inlineToolbar: true
  },
  code: Code,
  raw: Raw,
  delimiter: Delimiter,
  checklist: {
    class: CheckList,
    inlineToolbar: true
  },
  // warning: {
  //   class: Warning,
  //   inlineToolbar: true
  // },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        vimeo: true,
        instagram: true
      }
    },
    inlineToolbar: true
  },
  inlineCode: InlineCode,
  marker: Marker,
}

export default EDITOR_JS_TOOLS

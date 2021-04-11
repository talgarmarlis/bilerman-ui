import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import hljs from 'highlight.js'
import {Table} from "antd";
import 'highlight.js/styles/atom-one-light.css';
import config from "config";
import styles from './style.module.scss'

const Index = ({ body }) => {

  const getHTML = (text) => <div dangerouslySetInnerHTML={{__html: text}} />

  const getCaption = (caption) => {
    if(caption)
      return (
        <div className={`${styles.textDivider}`}>
          <div className={`${styles.textDividerContent} font-italic`}>
            {getHTML(caption.substr(0,50))}
          </div>
        </div>
      )
    return null;
  }

  const getHeader = ({text, level}) => {
    switch(level) {
      case 1:
        return <h1>{text}</h1>;
      case 2:
        return <h2>{text}</h2>;
      case 3:
        return <h3>{text}</h3>;
      case 4:
        return <h4>{text}</h4>;
      case 5:
        return <h5>{text}</h5>;
      case 6:
        return <h6>{text}</h6>;
      default:
        return <h2>{text}</h2>;
    }
  }

  const getParagraph = ({text}) => {
    return <p key={`p_${text.substring(0,10)}`}>{getHTML(text)}</p>
  }

  const getQuote = ({text, caption}) => {
    return (
      <div className={`${styles.container} mb-3`}>
        <div className={`${styles.status} bg-default`} />
        <div className={`${styles.footer} py-3 pl-4 text-align-center font-italic`}>
          {getHTML(text)}
        </div>
        {getCaption(caption)}
      </div>
    )
  }


  const getList = ({style, items}) => {
    return (
      <div>
        <ul className="list">
          {items.map((item, index) => (
            <li className={styles.item} key={`renderList.${index + item}`}>
              <span className="font-weight-bold mr-2">
                {style === "ordered" && index + 1}
                {style === "unordered" && <i style={{fontSize: 8}} className="fa fa-circle" />}
              </span>
              {getHTML(item)}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const getTableColumns = (cols) => {
    const columns = []
    cols.map((col, index) => (
      columns.push(
        {
          title: getHTML(col),
          dataIndex: index,
          key: index + col,
          className: 'bg-transparent text-gray-6'
        }
      )
    ));
    return columns;
  }

  const getTableData = (content) => {
    const data = []
    for(let i = 1; i < content.length; i += 1){
      const item = {key: i}
      for(let j = 0; j < content[i].length; j += 1) {
        item[j] = getHTML(content[i][j]);
      }
      data.push(item)
    }
    return data;
  }

  const getTable = ({content}) => {
    if (content.length > 0) {
      const cols = getTableColumns(content[0])
      const data = getTableData(content)
      return (
        <div className="card border-light">
          <div className="card-body">
            <PerfectScrollbar>
              <div className={styles.table}>
                <Table columns={cols} dataSource={data} pagination={false} />
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      )
    }
    return <></>
  }

  const getImage = ({file, caption, withBorder, stretched, withBackground}) => {
    return (
      <div className={`card ${withBorder ? '' : 'border-0'} ${withBackground ? 'bg-light' : ''}`}>
        <div className="card-body">
          <div className="d-flex mb-3">
            <img className={`img-fluid ml-auto mr-auto ${stretched ? 'width-100p' : ''}`} src={`${config.apiUrl}/images/article/${file.id}`} alt={caption} />
          </div>
          {getCaption(caption)}
        </div>
      </div>
    )
  }

  const getSimpleImage = ({url, caption, withBorder, stretched, withBackground}) => {
    return (
      <div className={`card ${withBorder ? '' : 'border-0'} ${withBackground ? 'bg-light' : ''}`}>
        <div className="card-body">
          <div className="d-flex mb-3">
            <img className={`img-fluid ml-auto mr-auto ${stretched ? 'width-100p' : ''}`} src={url} alt={caption} />
          </div>
          {getCaption(caption)}
        </div>
      </div>
    )
  }

  const getCode = ({code}) => {
    return (
      <div className="card border-0 bg-light">
        <div className="card-body">
          <pre><code>{getHTML(hljs.highlightAuto(code).value)}</code></pre>
        </div>
      </div>
    )
  }

  const getRaw = ({html}) => {
    return (
      <div className="card border-0 bg-light">
        <div className="card-body">
          <pre><code>{getHTML(hljs.highlightAuto(html).value)}</code></pre>
        </div>
      </div>
    )
  }

  const getDelimiter = () => {
    return (
      <div className="d-flex mb-3">
        <div className="font-size-36 mr-auto ml-auto text-primary">*   *   *</div>
      </div>
    )
  }

  const getChecklist = ({items}) => {
    return (
      <div className="card border-0">
        <div className="card-body">
          <ul className="list-unstyled">
            {items && items.map(item => (
              <li className={styles.item}>
                <label htmlFor="checkbox-1" className={`${styles.control} ${styles.checkbox} mb-0`}>
                  <input type="checkbox" id="checkbox-1" checked={item.checked} readOnly />
                  <span className={`${styles.controlIndicator}`} />
                  <div className="d-inline-block">{getHTML(item.text)}</div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const embedYoutube = (embed, width, height) => {
    return (
      <div className={styles.youtubeContainer}>
        <iframe
          width={width}
          height={height}
          title="Embedded Youtube"
          src={`${embed}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  const embedInstagram = (embed, width, height) => {
    return (
      <div className="card mb-0 border-light">
        <div className={`${styles.instagramContainer}`}>
          <iframe
            width={width}
            height={height}
            title="Embedded Instagram"
            src={`${embed}`}
            frameBorder="0"
          />
        </div>
      </div>
    )
  }

  const embedVimeo = (embed, width, height) => {
    return (
      <div className={`${styles.youtubeContainer}`}>
        <iframe
          width={width}
          height={height}
          title="Embedded Vimeo"
          src={embed}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    )
  }

  const getEmbed = ({service, embed, width, height, caption}) => {
    let embedContent
    switch(service) {
      case "youtube":
        embedContent = embedYoutube(embed, width, height);
        break;
      case "instagram":
        embedContent = embedInstagram(embed, width, height);
        break;
      case "vimeo":
        embedContent = embedVimeo(embed, width, height);
        break;
      default:
        embedContent = <></>;
    }

    return (
      <div key={`embed_${embed}`} className="card border-0">
        <div className="card-body">
          <div className="mb-3">
            {embedContent}
          </div>
          {getCaption(caption)}
        </div>
      </div>
    )
  }

  const renderSwitch = ({type, data}) => {
    switch(type) {
      case 'header':
        return getHeader(data);
      case 'paragraph':
        return getParagraph(data);
      case 'quote':
        return getQuote(data);
      case 'list':
        return getList(data);
      case 'table':
        return getTable(data);
      case 'image':
        return getImage(data);
      case 'simpleImage':
        return getSimpleImage(data);
      case 'code':
        return getCode(data);
      case 'raw':
        return getRaw(data);
      case 'delimiter':
        return getDelimiter();
      case 'checklist':
        return getChecklist(data);
      case 'embed':
        return getEmbed(data);
      default:
        return <p>{type}: {JSON.stringify(data)}</p>;
    }
  }

  return (
    <>
      {body && body.blocks.map(block => (renderSwitch(block)))}
    </>
  )
}

export default Index

import React, { useEffect, useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Layout } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { draftService } from 'services'
import PublicationForm from './form'
import Editor from "./editor/editor";
import TopBar from "../../../layouts/Editor/topbar";
import style from "./style.module.scss";

const mapStateToProps = ({ settings }) => ({
  theme: settings.theme,
})

const ArticleEditor  = ({theme}) => {

  const params = useParams();
  const [formStatus, setFormStatus] = useState(false);
  const [draft, setDraft] = useState({});
  const [defaultEditorData, setDefaultEditorData] = useState({});
  const [defaultTitle, setDefaultTitle] = useState();
  const [loaded, setLoaded] = useState(false);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (params.draftId) {
      loadDraft(params.draftId)
    }
  }, [])

  const loadDraft = (drafId) => {
    draftService.getDraftById(drafId).then(response => {
      const draftData = response.data
      setDraft({...draftData})
      setDefaultTitle(draftData.title)
      const editorData = JSON.parse(draftData.body)
      setDefaultEditorData({...editorData})
      setLoaded(true)
    })
  }

  const handleImageChange = imageId => {
    if(draft.id) {
      const updatedData =  {...draft}
      updatedData.imageId = imageId
      draftService.saveDraft(updatedData).then(response => {
        const savedDraft =  response.data
        setDraft({ ...savedDraft })
        if(!edited) setEdited(true)
      })
    }
  }

  const saveDraft = (content) => {
    if (content.title || content.body) {
      const updatedData =  {...draft, ...content}
      draftService.saveDraft(updatedData).then(response => {
        const savedDraft =  response.data
        setDraft({ ...savedDraft })
        if(!edited) setEdited(true)
      })
    }
  }

  return (
    <>
      <Layout.Header
        className={classNames('cui__layout__header', {
          cui__layout__fixedHeader: true,
          cui__layout__headerGray: false,
        })}
      >
        <TopBar theme={theme} edited={edited} toggleForm={() => setFormStatus(!formStatus)} />
      </Layout.Header>
      <Layout.Content style={{ height: 'auto', position: 'relative' }}>
        <div>
          <div>
            <div
              className={classNames(style.cui__sidebar, {
                [style.cui__sidebar__toggled]: formStatus,
              })}
            >
              <PerfectScrollbar>
                <div className={style.cui__sidebar__inner}>
                  <Button
                    type="default"
                    shape="circle"
                    icon={<CloseOutlined />}
                    size="small"
                    className={style.cui__sidebar__close}
                    onClick={() => setFormStatus(!formStatus)}
                  />
                  <h5>
                    <strong>
                      <FormattedMessage id="article.editor.form.publishDraft" />
                    </strong>
                  </h5>
                  <div className="cui__utils__line" style={{ marginTop: 25, marginBottom: 30 }} />
                  {formStatus && <PublicationForm draft={draft} handleImage={handleImageChange} />}
                </div>
              </PerfectScrollbar>
            </div>
          </div>
          {loaded && <Editor saveDraft={saveDraft} defaultTitle={defaultTitle} defaultEditorData={defaultEditorData} />}
          {!loaded && <Editor saveDraft={saveDraft} defaultEditorData={defaultEditorData} />}
        </div>
      </Layout.Content>
    </>
  )

}

export default injectIntl(connect(mapStateToProps)(ArticleEditor))

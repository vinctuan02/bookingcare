import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageSpecialty.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';


const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageSpecialty extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState) {

    };


    render() {
        return (
            <React.Fragment>
                <div className="manage-specialty-container">
                    <div className="ms-title" >Quản lý chuyên khoa</div>
                    <div className="add-new-specialty row">
                        <div className="col-6 form-group">
                            <label>Tên chuyên khoa</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-6 form-group">
                            <label>Ảnh chuyên khoa</label>
                            <input className="form-control-file" type="file" />
                        </div>
                        <div className='col-12'>
                            <MdEditor
                                style={{ height: '300px' }}
                                renderHTML={text => mdParser.render(text)}
                            // onChange={this.handleEditorChange}
                            // value={this.state.contentMarkdown}
                            />
                        </div>
                        <div className='btn-save-specialty col-12'>
                            <button className='btn-save-specialty'>Save</button>
                        </div>
                    </div>
                </div >
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);



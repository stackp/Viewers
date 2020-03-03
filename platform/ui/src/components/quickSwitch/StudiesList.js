import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StudyItem } from './StudyItem.js';
import './StudiesList.styl';

const getStudyData = study => {
  return {
    studyDate: study.studyDate,
    studyDescription: study.studyDescription,
    modalities: study.studyDescription,
    studyAvailable: study.studyAvailable,
  };
};

export class StudiesList extends Component {
  static propTypes = {
    class: PropTypes.string,
    studyListData: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    activeStudyInstanceUid: PropTypes.string,
  };

  render() {
    return (
      <div className={`studiesList ${this.props.class}`}>
        {this.getBrowserItems()}
      </div>
    );
  }

  getBrowserItems = () => {
    return this.props.studyListData.map((studyData, index) => {
      return (
        <StudyItem
          key={index}
          studyData={getStudyData(studyData)}
          active={
            studyData.studyInstanceUid === this.props.activeStudyInstanceUid
          }
          onClick={event => this.props.onClick(studyData)}
        />
      );
    });
  };
}
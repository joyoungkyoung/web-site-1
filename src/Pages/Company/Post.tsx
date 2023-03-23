import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import icoHit from '@Assets/Images/Common/ico_hit.svg';

const BOARD_LIST = [
  {
    no: 3,
    content: '굿피플-원더플레이스, 미얀마 등에 30억원어치 의류 기증',
    isHit: true,
    date: '2017.05.26',
    view: 2431,
  },
  {
    no: 2,
    content: '김영한 원더플레이스 대표, 한국패션 유통 뉴 패러다임은?',
    isHit: true,
    date: '2017.05.26',
    view: 3151,
  },
  {
    no: 1,
    content: '편집숍 투 톱! 에이랜드 & 원더플레이스 글로벌BIZ 강화',
    isHit: true,
    date: '2017.05.26',
    view: 3226,
  },
];

const BOARD_LIST2 = [
  {
    no: 17,
    content: '제12기 정기주주총회 소집공고',
    isHit: false,
    date: '2023.03.15',
    view: 15,
  },
  {
    no: 16,
    content: '제11기 결산공고',
    isHit: true,
    date: '2022.03.31',
    view: 177,
  },
  {
    no: 15,
    content: '제11기 정기주주총회 소집공고',
    isHit: false,
    date: '2022.03.16',
    view: 93,
  },
  {
    no: 14,
    content: '제10기 결산공고',
    isHit: false,
    date: '2021.03.31',
    view: 7,
  },
  {
    no: 15,
    content: '제10기 정기주주총회 소집공고',
    isHit: true,
    date: '2021.03.16',
    view: 301,
  },
];
const Post = () => {
  const renderTable = (boardList: any[]) => {
    return (
      <table border={1}>
        <colgroup>
          <col style={{ width: '90px' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: '130px' }} />
          <col style={{ width: '90px' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
            <th scope="col">조회</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td className={classNames('subject', 'left', 'text-break')}>
                <Link to={''}>{item.content}</Link>
                &nbsp;
                {item.isHit && <img src={icoHit} alt={icoHit} />}
              </td>
              <td>
                <span className="text-num">{item.date}</span>
              </td>
              <td>
                <span className="text-num">{item.view}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className="cs-post cs-area cs-gray">
      <div className="wrap">
        <strong className="cs-title">홍보</strong>
        <div className="cs-content">
          <div className="cs-board">
            <div className={classNames('ec-base-table', 'typeList', 'gLine')}>{renderTable(BOARD_LIST)}</div>
          </div>
        </div>
        <Link to={''} className={classNames('btn', 't2')} />
      </div>
      <div className="wrap">
        <strong className="cs-title">공시</strong>
        <div className="cs-content">
          <div className="cs-board">
            <div className={classNames('ec-base-table', 'typeList', 'gLine')}>{renderTable(BOARD_LIST2)}</div>
          </div>
        </div>
        <Link to={''} className={classNames('btn', 't2')} />
      </div>
    </section>
  );
};

export default Post;

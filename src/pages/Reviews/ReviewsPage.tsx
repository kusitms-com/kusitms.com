import Layout from "components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useIsMobile } from "hooks/useIsMobile";

interface reviewListType {
  name: string;
  team: string;
  review: string;
}

interface categoryType {
  name: string;
  value: string;
}

const REVIEW_TITLE = "큐밀리의\n솔직 후기를 들어보세요!";
const MOBILE_REVIEW_TITLE = "큐밀리의\n솔직 후기를\n들어보세요!";
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const API_URL = `${process.env.REACT_APP_SERVER_BASE_ADDRESS}api/reviews`;
const categories = [
  {
    name: "전체",
    value: "전체",
  },
  {
    name: "기획",
    value: "기획팀",
  },
  {
    name: "개발",
    value: "개발팀",
  },
  {
    name: "디자인",
    value: "디자인팀",
  },
];

const Reviews = () => {
  const [count, setCount] = useState<number>();
  const [lists, setLists] = useState<reviewListType[]>([]);
  const [data, setData] = useState<reviewListType[]>([]);
  const [btn, setBtn] = useState<string>("전체");
  const isMobile = useIsMobile();

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    setBtn(id);
  };

  const getReviewLists = () => {
    axios
      .get(API_URL)
      .then((res) => {
        if (res.data.code === 200) {
          setLists(res.data.data.review_list);
          setData(res.data.data.review_list);
          setCount(res.data.data.review_count);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 데이터 필터링
  const activeCategory = (btn: string) => {
    if (btn === "전체") {
      setData(lists);
      return;
    }
    const filterData = lists.filter(
      (item: reviewListType) => item.team === btn
    );
    setData(filterData);
  };

  useEffect(() => {
    getReviewLists();
    activeCategory(btn);
  }, []);

  // 카테고리 버튼 색상 변경 코드
  useEffect(() => {
    const allBtnArr = ["전체", "기획", "개발", "디자인"];
    const nonTargetedBtnArr = allBtnArr.filter((item) => item !== btn);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById(btn)!.style.backgroundColor = "#0055ff";
    nonTargetedBtnArr.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById(item)!.style.backgroundColor = "#dce1ff";
      return null;
    });
  });

  if (isMobile) {
    return (
      <Layout>
        <MobileContainer>
          <MobileTitle>{MOBILE_REVIEW_TITLE}</MobileTitle>
          <MobileReviewsSubTitle>
            <span style={{ color: "#0055ff" }}>{count}</span>개의 후기가
            등록되어 있어요
          </MobileReviewsSubTitle>
          <MobilePartsContainer>
            {categories.map((item: categoryType, idx: number) => (
              <MobilePartsBtn
                key={idx}
                id={item.name}
                onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                  activeCategory(item.value);
                  onClick(e);
                }}
              >
                {item.name}
              </MobilePartsBtn>
            ))}
          </MobilePartsContainer>
          <MobileReviewBoxContainer>
            {data.map((item: reviewListType, index: number) => (
              <MobileReviewBox key={index}>
                <MobileReviewWriter>{item.name}</MobileReviewWriter>
                <MobileWriterTeam>{item.team}</MobileWriterTeam>
                <MobileWriterReview>{item.review}</MobileWriterReview>
              </MobileReviewBox>
            ))}
          </MobileReviewBoxContainer>
        </MobileContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <ReviewsContainer>
        <ReviewsTitle>{REVIEW_TITLE}</ReviewsTitle>
        <ReviewsSubTitle>
          <span style={{ color: "#0055ff" }}>{count}</span>개의 후기가 등록되어
          있어요
        </ReviewsSubTitle>
        <PartsContainer>
          {categories.map((item: categoryType, idx: number) => (
            <PartsBtn
              key={idx}
              id={item.name}
              onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                activeCategory(item.value);
                onClick(e);
              }}
            >
              {item.name}
            </PartsBtn>
          ))}
        </PartsContainer>
        <ReviewBoxContainer>
          {data.map((item: reviewListType, index: number) => (
            <ReviewBox key={index}>
              <ReviewWriter>{item.name}</ReviewWriter>
              <WriterTeam>{item.team}</WriterTeam>
              <WriterReview>{item.review}</WriterReview>
            </ReviewBox>
          ))}
        </ReviewBoxContainer>
      </ReviewsContainer>
    </Layout>
  );
};

export default Reviews;

const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
`;

const MobileTitle = styled.p`
  padding-top: 60px;
  font-family: "SUIT";
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  margin-bottom: 40px;
  letter-spacing: -0.2px;
  white-space: pre-wrap;
`;

const MobileReviewsSubTitle = styled.span`
  font-family: "SUIT";
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.2px;
`;

const MobilePartsContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const MobilePartsBtn = styled.button`
  padding: 8px 20px;
  border-radius: 75px;
  background-color: "#0055ff";
  border: none;

  font-size: 16px;
  font-family: "SUIT";
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: "#0055ff";
  }
`;

const MobileReviewBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 390px;
  flex-wrap: wrap; // 복수의 행
  margin-bottom: 60px;
`;

const MobileReviewBox = styled.div`
  width: 334px;
  height: 368px;
  background: #f2f2f8;
  border-radius: 32px;
  padding: 40px 24px;
  margin-bottom: 24px;
  text-align: left;
  font-family: "SUIT";
`;

const MobileReviewWriter = styled.p`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 4px;
`;

const MobileWriterTeam = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #0055ff;
  margin-bottom: 24px;
`;

const MobileWriterReview = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

// 웹 버전
const ReviewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-wrap;
  text-align: center;
  background-color: #ffffff;
  padding-top: 264px;
  padding-bottom: 160px;
`;

const ReviewsTitle = styled.div`
  font-family: "SUIT";
  font-size: 72px;
  font-weight: 800;
  line-height: 96px;
  margin-bottom: 64px;
  letter-spacing: -1px;
`;

const ReviewsSubTitle = styled.span`
  font-family: "SUIT";
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: -0.2px;
`;

const PartsContainer = styled.div`
  width: 558px;
  display: flex;
  justify-content: space-between;
  margin: 120px 0;
`;

const PartsBtn = styled.button`
  padding: 16px 32px;
  border-radius: 75px;
  background-color: "#0055ff";
  border: none;

  font-size: 20px;
  line-weight: 25px;
  font-family: "SUIT";
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: "#0055ff";
  }
`;

const ReviewBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 1180px;
  gap: 20px;
  flex-wrap: wrap; // 복수의 행
`;

const ReviewBox = styled.div`
  width: 380px;
  height: 460px;
  background: #f2f2f8;
  border-radius: 32px;
  padding: 48px 32px;
  margin-bottom: 34px;
  text-align: left;
  font-family: "SUIT";
`;

const ReviewWriter = styled.p`
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 8px;
`;

const WriterTeam = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #0055ff;
  margin-bottom: 32px;
`;

const WriterReview = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  // overflow: auto;
  // white-space: normal;
  // width: 316px;
  // height: 263px;
`;

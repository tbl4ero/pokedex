import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GoBack from "./GoBack";
import Spinner from "./../../Spinner";
import {
  PageContainer,
  Container,
  SpinnerContainer,
} from "./SamplePage.styles";

const SamplePage = ({
  WrappedComponent,
  match,
  setData,
  history,
  selector,
}: any) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => ({
    data: state[selector],
  }));

  useEffect(() => {
    dispatch(setData(match.params.name, setLoading));
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <PageContainer bg={data.bgColor}>
          <GoBack route={history.goBack} />
          <Container>
            <WrappedComponent {...{ match, setData, history, data }} />
          </Container>
        </PageContainer>
      )}
    </>
  );
};

export default SamplePage;

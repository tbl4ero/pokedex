import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GoBack from "./GoBack";
import Spinner from "./../../Spinner";
import {
  PageContainer,
  Container,
  SpinnerContainer,
} from "./SamplePage.styles";
import { SamplePageProps } from "./SamplePage.interface";
import StoreInterface from "../../types/store.interface";
import { Pokemon } from "../pokepage/PokePage.types";

const SamplePage = ({
  WrappedComponent,
  match,
  setData,
  history,
  selector,
}: SamplePageProps) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  // @ts-ignore
  const { data }: Pokemon  = useSelector((state: StoreInterface) => ({
  // @ts-ignore
    data: state[selector],
  }));

  useEffect(() => {
    // @ts-ignore
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
            <WrappedComponent {...data} />
          </Container>
        </PageContainer>
      )}
    </>
  );
};

export default SamplePage;

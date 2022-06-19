import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum, Id } from '~/consts/curriculums';
import { IDS } from '~/consts/curriculums';
import { CURRICULUMS } from '~/consts/curriculums';

type Props = {
  id: Id;
  curriculum: Curriculum;
};

const RegisterFormSubmit: NextPage<Props> = (props: Props) => {
  const { id, curriculum } = props;

  return (
    <>
      <Head title={curriculum.title} description={curriculum.description} />

      <TaskDetail id={id} curriculum={curriculum}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const id = IDS.REGISTER_FORM_SUBMIT;
  const curriculum = CURRICULUMS.REGISTER_FORM.DETAIL.REGISTER_FORM_SUBMIT;

  return {
    props: {
      id,
      curriculum,
    },
  };
};

export default RegisterFormSubmit;
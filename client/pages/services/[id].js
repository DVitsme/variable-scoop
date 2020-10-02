import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const SingleService = ({ data }) => {
  const router = useRouter();
  console.log(router.query.id);
  console.log(data);
  return (
    <div>
      <h1>Still Testing</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  // const getAbout = await fetchAPI('about');
  const service = await axios.get(
    `http://localhost:1337/services?slug=strategic-planning`
  );
  const data = service.data[0];
  console.log(data);
  return {
    props: { data },
  };
}

export default SingleService;

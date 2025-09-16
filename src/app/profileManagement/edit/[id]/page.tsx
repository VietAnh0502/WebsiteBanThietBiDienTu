'use client';

import { useParams } from 'next/navigation';
import EditProfileManagement from '../../../../components/profileManagement/editProfileManagement';
import MainLayout from "../../../main-layout"


const EditProfilePage = () => {
  const params = useParams();
  const id = params.id as string;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <EditProfileManagement id={id} />;
      </MainLayout>

    </>
  )

};

export default EditProfilePage;
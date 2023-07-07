import React from 'react';
import { Card } from '@/components/flowbite/cliented-flowbite';
import PageWrapper from './page-wrapper';
import NavBar from '@/components/NavBar';
type Box = {
  color: string;
  text: string;
};

const MyComponent: React.FC = () => {
  const boxes: Box[] = [
    { color: 'red', text: 'Box 1' },
    { color: 'blue', text: 'Box 2' },
    { color: 'green', text: 'Box 3' },
    { color: 'yellow', text: 'Box 4' },
  ];

  return (
    <>
    <NavBar />
    <PageWrapper >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center min-h-screen">
      {boxes.map((box, index) => (
        <Card>
        <div
          key={index}
          className={`p-4 w-64 h-64 flex items-center justify-center shadow-lg rounded  bg-yellow-500`}
        >
          {box.text}
        </div>
        </Card>
      ))}
    </div>
    </PageWrapper>
    </>
  );
};

export default MyComponent;

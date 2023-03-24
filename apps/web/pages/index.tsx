// import { Database, ref, get, child } from 'firebase/database';
import { collection, Firestore, doc, getDoc } from 'firebase/firestore';
import { fireStore } from './firebase';

import { Button } from 'ui';
import { useState } from 'react';

const usePageList = (db: Firestore) => {
  const [pageList, setPageList] = useState<any[]>([]);

  const pagesRef = doc(db, 'catalog', 'pages');

  getDoc(pagesRef).then((pages) => {
    const pageIds = pages.data().list;
    setPageList(pageIds);
  });

  return pageList;
};

export default function Web() {
  const pages = usePageList(fireStore);

  return (
    <div>
      <ul>
        {pages.map((pageId) => (
          <li>{pageId}</li>
        ))}
      </ul>
      <Button />
    </div>
  );
}

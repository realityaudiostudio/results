import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
import DynamicContent from '../components/DynamicContent';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DynamicPage = () => {
  const { documentId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      const db = firebase.firestore();
      try {
        const documentRef = db.collection('heros').doc(documentId);
        const documentSnapshot = await documentRef.get();

        if (documentSnapshot.exists) {
          setData(documentSnapshot.data());
        } else {
          setError('Document not found');
        }
      } catch (err) {
        setError('Error fetching document');
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [documentId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <DynamicContent data={data} />}
    </div>
  );
};

export default DynamicPage;

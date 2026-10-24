import type { Metadata } from 'next';
import NoteForm from '../../../../components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

export const metadata: Metadata = {
  title: 'Create New Note | NoteHub',
  description: 'Create and save your personal notes easily on NoteHub.',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description: 'Create and save your personal notes easily on NoteHub.',
    url: 'https://notehub.com',
    images: [
      {
        url: 'https://goit.global',
        width: 1200,
        height: 630,
        alt: 'Create Note Banner',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}

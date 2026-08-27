import React from 'react';
import { FileUpload } from './FileUpload.jsx';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "resident document capture. The default is a stacked set of capture-source buttons (Camera / Photos / Files), each a white surface with a 2px dashed accent border (never a grey fill). This is the rule for mobile document upload. Below the buttons, uploaded files list as rows with the vivid-green uploaded state.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=163-22',
    },
  },
  argTypes: {
    sources: { table: { disable: true } },
    onChoose: { table: { disable: true } },
    files: { table: { disable: true } },
    onRemove: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    hint: 'A photo of the VOC card or letter for this person.',
  },
};

export const WithUploadedFile = {
  args: {
    hint: 'A photo of the VOC card or letter for this person.',
    files: [{ name: 'water-bill-june.jpg', size: '1.2 MB', status: 'Uploaded' }],
  },
};

export const Dropzone = {
  args: {
    sources: null,
    accept: 'PDF, JPG, or PNG · up to 10 MB',
  },
};

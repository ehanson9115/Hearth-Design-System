import React from 'react';

export interface UploadedFile {
  name: string;
  size?: string;
  status?: string;
}

export interface UploadSource {
  /** Tabler icon name without the `ti-` prefix, e.g. 'camera'. */
  icon: string;
  label: string;
  /** Passed to onChoose when this source is tapped. */
  value?: string;
}

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Capture-source buttons (Camera / Photos / Files by default). This stacked
   * button set is the standard mobile affordance. Pass `null` for the single
   * "Choose file" dropzone (desktop / drag).
   */
  sources?: UploadSource[] | null;
  /** Optional helper line above the affordance. */
  hint?: string;
  /** Accepted-types helper line (dropzone fallback only). */
  accept?: string;
  buttonLabel?: string;
  /** Fired with the chosen source's `value` (or undefined for the dropzone). */
  onChoose?: (source?: string) => void;
  /** Already-uploaded files to list below. */
  files?: UploadedFile[];
  onRemove?: (file: UploadedFile, index: number) => void;
}

/** Hearth file upload: stacked capture-source buttons (default) or dropzone + uploaded rows. */
export function FileUpload(props: FileUploadProps): JSX.Element;

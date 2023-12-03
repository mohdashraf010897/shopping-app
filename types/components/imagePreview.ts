export interface ImagePreviewProps {
  imageUrl: string;
  zoomLevel?: number;
  width: number;
  height: number;
  style?: React.CSSProperties;
  priority?: boolean;
  quality?: number;
  alt?: string;
  className?: string;
}

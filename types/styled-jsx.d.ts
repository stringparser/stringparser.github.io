import 'react'

declare module 'react' {
  interface DetailedHTMLProps<T> extends React.DetailedHTMLProps<T> {
    jsx?: boolean;
    global?: boolean;
  }
}


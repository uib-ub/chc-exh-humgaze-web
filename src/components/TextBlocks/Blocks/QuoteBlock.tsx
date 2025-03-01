import { TextBlocks } from '..'

export default function QuoteBlock(props: any) {
  if (!props || props.disabled === true) {
    return null
  }

  return (
    <figure>
      <blockquote>
        <TextBlocks
          fontSize={['lg', null, '2xl', null]}
          value={props.content}
          color="red"
        />
      </blockquote>

      {props.credit && (
        <figcaption>
          <TextBlocks pl="20" textAlign="right" value={props.credit} />
        </figcaption>
      )}
    </figure>
  )
}

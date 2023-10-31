import PostHeader from "./post-header.component";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";


function PostContent(props) {
    
    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;
            if(node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className="classes.image">
                        <Image 
                            src={`/images/posts/${slug}/${image.properties.src}`} 
                            alt={image.alt} 
                            width={600}
                            height={300} 
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },

        code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
    };

    return (
        <article className={classes.content}>
        <PostHeader post={props.post} />
        <ReactMarkdown components={customRenderers}>{props.post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;
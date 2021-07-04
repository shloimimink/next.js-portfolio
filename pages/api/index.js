export const posts = () => {
    return (
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{ _id, url  }, alt  } }`

    )
}

export const singlePostQuery = () => {
    return (
        `*[slug.current == $slug][0]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`
    )
}

export const aboutQuery = () => {
    return (
        `*[_type == "author"][0]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
    )
}

export const projectQuery = () => {
    return (
        `*[_type == 'project']{
      title,
      date,
      place,
      description,
      projectType,
      link,
      GithubLink,
      tags}`

    )
}
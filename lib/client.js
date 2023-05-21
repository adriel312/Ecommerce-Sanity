import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'c0dn0ovg',
    dataset: 'production',
    apiVersion: '2022-10-30',
    useCdn: 'true',
    token: 'skXmH38Dn6Urf8wtdRy8xUWbKQO49GVvViq0oYrOjzF8bGeYo7jL8KTl2JX0NRbZlFRk1YsVMiPZikzTu5MJeYEfdCsesgezGA4uRjPuLOW94XNOYdK3jKf9EqOgw3i107054Gq6lCmC679jhCYJHcWApscG3vAqQMdyyQ8NRZs2nZWMjE6T'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
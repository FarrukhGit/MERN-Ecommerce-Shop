import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
     {
        name: 'Johnny',
        email: 'Johnny@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
     {
        name: 'Sonny',
        email: 'Sonny@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
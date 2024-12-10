// import type {NextApiRequest, NextApiResponse} from 'next';
// import {PrismaClient} from '@prisma/client';
// const prisma = new PrismaClient();

// export default async function usersServices(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     const { id } = req.query;
  
//     if (!id) {
//       return res.status(400).json({ error: 'ID is required' }); // خطای مناسب برای نبود ID
//     }
  
//     try {
//       const user = await prisma.user.findFirst({
//         where: {
//           id: Number(id), // تبدیل ID به عدد
//         },
//       });
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' }); // کاربر پیدا نشد
//       }
  
//       return res.status(200).json(user); // ارسال کاربر
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Internal Server Error' }); // خطای عمومی سرور
//     }
//   }
  
//   if (req.method === 'POST') {
//     const { email, name, password, phone } = req.body;
  
//     // بررسی وجود مقادیر ضروری
//     if (!name || !password || !phone || !email) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }
  
//     try {
//       const user = await prisma.user.create({
//         data: {
//           name,
//           password,
//           phone,
//           email,
//         },
//       });
  
//       return res.status(201).json(user); // ارسال موفقیت‌آمیز
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Internal Server Error' }); // مدیریت خطای سرور
//     }
//   }
  
//   if (req.method === 'PUT') {
//     let data = await prisma.user.update({
//       where: {
//         id: req.body.id,
//       },
//       data: {
//         email: req.body.email,
//         name: req.body.name,
//         password: req.body.password,
//         phone: req.body.phone,


//       },
//     });
//     return res.json(data);
//   }
//   if (req.method === 'DELETE') {
//     let data = await prisma.user.delete({
//       where: {
//         id: req.body.id,
//       },
//     });
//     return res.json(data);
//   }
//   return res.json({});
// }
import { Router } from 'express'

const router = Router()

/**
 * Product
 */
router.get('/product', (req, res)=>{
    res.json({message: 'product'})
})
router.get('/product/:id', ()=>{})
router.put('/product/:id', ()=>{})
router.post('/product/:id', ()=>{})
router.delete('/product/:id', ()=>{})

/**
 * Update
 */
router.get('/update', ()=>{})
router.get('/update/:id', ()=>{})
router.put('/update/:id', ()=>{})
router.post('/update/:id', ()=>{})
router.delete('/update/:id', ()=>{})

/**
 * Update Point
 */
router.get('/updatepoint', ()=>{})
router.get('/updatepoint/:id', ()=>{})
router.put('/updatepoint/:id', ()=>{})
router.post('/updatepoint/:id', ()=>{})
router.delete('/updatepoint/:id', ()=>{})

export default router
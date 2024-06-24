import prisma from "../db"

// Get all
export const getUpdates = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.json({data: update})
}

// Get one update
export const getOneUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])
    res.json({data: updates})
}

// Create a update
export const createUpdate = async (req, res) => {}

// Update a update
export const updateUpdate = async (req, res) => {}

// Delete update
export const deleteUpdate = async (req, res) => {}
/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - featured
 *         - url
 *         - imageUrl
 *         - newsSite
 *         - summary
 *         - publishedAt
 *         - launches
 *         - events
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the article
 *         title:
 *           type: string
 *           description: The article title
 *         featured:
 *           type: boolean
 *           description: The article is featured
 *         url:
 *           type: string
 *           description: The article title
 *         imageUrl:
 *           type: string
 *           description: The article image url
 *         newsSite:
 *           type: string
 *           description: The article news webpage
 *         summary:
 *           type: string
 *           description: The summary of the article
 *         publishedAt:
 *           type: Date
 *           description: The publish date
 *         launches:
 *           type: Array
 *           description: The launches
 *         events:
 *           type: Array
 *           description: The events
 *       example:
 *           title: "Article Title"
 *           summary: "Summary"
 *           featured: false
 *           url: "www.img.com"
 *           newsSite: "www.news.com"
 *           publishedAt: 2022-01-11 06:00:00
 *           imageUrl: "www.img-url.com"
 *           launches: [ {"id":"1", "provider":"nasa"} ]
 *           events: [ {"id":"1", "provider":"nasa"} ]
 */

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: The articles managing API
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Returns the list of all articles
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: start
 *         schema:
 *           type: integer
 *         required: true
 *         description: The list start point
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: true
 *         description: The limit of articles
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: Partial article title
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Get the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the article
 *     responses:
 *       200:
 *         description: The article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: No content, created status
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /articles/{id}:
 *  put:
 *    summary: Update the article by id
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The article id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Article'
 *    responses:
 *      204:
 *        description: No content
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal server error
 */

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The article id
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Not found
 */

import Sidebar from "../components/Sidebar"
import OceanBg from "../assets/images/ocean-bg.jpg"

function Postpage() {
  return (
    <div className="postpage">
      <div className="post">
        <div className="post__wrapper">
          <img src={OceanBg} alt="" className="post__image" />
          <h1 className="post__title">
            Lorem ipsum dolor sit amet.
            <div className="post__actions">
              <i className="post__icon post__icon-edit bx bxs-message-square-edit"></i>
              <i className="post__icon post__icon-delete bx bxs-trash-alt"></i>
            </div>
          </h1>
          <div className="post__info">
            <span className="post__author">
              <i className="bx bxs-pen"></i> Author : <b>Mouad</b>
            </span>
            <span className="post__date">
              1 hour ago <i className="bx bxs-calendar"></i>
            </span>
          </div>
          <p className="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam quisquam consequatur architecto saepe quis quod quo dolorem. Totam ipsum dignissimos, repellat dicta nihil consequuntur quae dolore? Eligendi consequuntur eveniet asperiores architecto totam minus voluptates quidem tempore facere ut reprehenderit nostrum officiis tenetur, accusamus maxime dolorum nisi? Pariatur, accusamus nam sunt voluptates cupiditate eum, doloribus magni ea suscipit quia perspiciatis aliquid unde libero inventore culpa aspernatur neque quaerat iste. Nulla et culpa quidem? Ex asperiores magni harum accusantium reprehenderit magnam quibusdam quam, iusto placeat doloremque sed, cum porro earum esse non dolorum neque? Quaerat autem mollitia eum? Unde nostrum distinctio excepturi ipsam expedita autem in obcaecati iure placeat perferendis minima vel dicta voluptas, quia error magnam nulla omnis saepe. In eum facere saepe quas modi quae, exercitationem odio obcaecati quos molestias? Esse, facilis placeat. Modi similique incidunt maxime unde, ut tempore est perspiciatis aliquam? Cum, maiores reprehenderit nesciunt praesentium voluptas quis iure voluptatibus laboriosam dolore laborum pariatur tenetur? Sequi, architecto? Fugiat eius voluptate error assumenda dolore aliquam tempora aspernatur deleniti quae, non suscipit cum iste. Suscipit, fugit. Amet quae laborum, tenetur dolore mollitia recusandae assumenda deleniti quisquam esse beatae labore quam odio sequi quaerat commodi molestiae. Neque aut aspernatur quibusdam perspiciatis necessitatibus quaerat, est cumque molestiae! Ullam dolorum ducimus possimus earum, sit saepe animi deleniti aspernatur numquam molestiae ex quo nisi cumque beatae nihil magnam itaque esse vitae veniam impedit recusandae pariatur fuga labore debitis? Totam nostrum impedit modi a! Ipsum necessitatibus unde exercitationem vitae incidunt inventore, molestiae dolores perferendis aliquid ea totam, veritatis minus sint facere tenetur quis, sequi consequuntur nisi? Numquam expedita cum perspiciatis modi quod delectus quis, doloremque deserunt officiis, eaque voluptate laborum reprehenderit et quam tempora earum. Enim pariatur nulla ab quam dicta temporibus tenetur quae sit qui consequatur blanditiis praesentium nam eum atque, minus quaerat inventore ullam officia nihil dolorem id aliquam eligendi. Veritatis nihil porro, tempora recusandae impedit consequatur. Obcaecati, debitis. Unde autem suscipit temporibus, nobis eaque at accusantium praesentium. Commodi assumenda necessitatibus molestiae quibusdam tempora error dignissimos, accusantium consequatur doloribus laboriosam, nulla corporis ipsam nesciunt omnis voluptatibus temporibus sapiente veniam officia, dolore culpa magnam. Maiores neque soluta voluptas eligendi aut error, placeat asperiores?</p>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Postpage

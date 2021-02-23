import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';

export type Post = {
  title: string;
  content: string;
  topic_category: string;
  on_off_category: string;
  participant_count_limit: number;
};

export class PostRepo {
  static async createPost(
    id: number,
    title: string,
    content: string,
    topic_category: string,
    on_off_category: string,
    participant_count_limit: number,
  ) {
    const createPostQuery = `INSERT INTO post(user_id, title, content, topic_category, on_off_category, participant_count_limit) VALUES ('${id}', '${title}', '${content}', '${topic_category}', '${on_off_category}', '${participant_count_limit}')`;
    return await insertQueryExecuter(createPostQuery);
  }

  static async getAllPosts() {
    const getAllPostsQuery = `SELECT * FROM post`;
    return await selectQueryExecuter(getAllPostsQuery);
  }

  static async getPostDetail(id: number) {
    const getPostDetailQuery = `SELECT * FROM post left JOIN comment ON comment.comment_post_id=post.id WHERE post.id=${id}`;
    return await selectQueryExecuter(getPostDetailQuery);
  }

  static async participateApply(post_id: number, user_id: number) {
    const participateApplyQuery = `INSERT INTO participant(post_id, user_id) values (${post_id}, ${user_id})`;
    return await insertQueryExecuter(participateApplyQuery);
  }
}

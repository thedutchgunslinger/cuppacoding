import ExerCard from '@/components/exerCard'
import ExerStyle from '@/styles/exercises.module.css'
import { gsap } from "gsap/dist/gsap";

export default function Exercises() {
    const languages = ['html', 'css', 'javascript','php', 'flask'];

  return (
    <>
      <div className={ExerStyle.container}>
          <ExerCard
            id={1}
            level={1}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={2}
            level={2}
            lang={["html", "css","extraLangeTaal"]}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={3}
            level={3}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={4}
            level={4}
            lang={["python", "html"]}
            title="python & html"
            module="python training"
            time={120}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={1}
            level={5}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={2}
            level={6}
            lang={["html", "css"]}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={3}
            level={7}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={4}
            level={8}
            lang={["python", "html"]}
            title="python & html"
            module="python training"
            time={120}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={4}
            level={8}
            lang={["python", "html"]}
            title="python & html"
            module="python training"
            time={120}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={1}
            level={1}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={2}
            level={3}
            lang={["html", "css"]}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
          <ExerCard
            id={3}
            level={6}
            lang={languages}
            title="name"
            module="python trainee"
            time={30}
            description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
          />
      </div>
    </>
  );
}

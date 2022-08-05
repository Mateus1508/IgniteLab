import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String ){
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
  	teacher {
      avatarURL
      bio
      name
  }
 }
}
`

interface GetLessonsBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
  	teacher: {
      avatarURL: string;
      bio: string;
      name: string;
  }
 }
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const {data} = useQuery(GET_LESSONS_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    }
  })

  if(!data) {
    return(
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
  <div className="flex-1">
    <div className="bg-gray-500 flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
          <Youtube videoId="JqQesiY2Ffo"/>
          <DefaultUi/>
        </Player>
      </div>
    </div>

    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            Aula 01 - Abertura do ignite Lab
          </h1>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consequatur nulla, suscipit hic architecto dignissimos.
          </p>

          <div className="flex items-center gap-4 mt-6" >
            <img 
              className="h-16 w-16 rounded-full border-2 border-yellow-500"
              src="https://github.com/mateus1508.png" 
              alt="Foto de perfil" />
            
            <div className="leading-relaxed" >
              <strong className="font-bold text-2xl block" >Mateus Belmonte</strong>
              <span className="text-gray-200 text-sm block" >Web Developer</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-4">
          <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
            <DiscordLogo size={24} />
            Comunidade do Discord
          </a>
          <a href="" className="p-4 text-sm border border-yellow-500 text-yellow-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-500 hover:text-gray-500 transition-colors">
            <Lightning size={24} />
            Acesse o desafio
          </a>

        </div>


    </div>
    
  <div className="gap-8 mt-20 grid grid-cols-2" >
    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" >
      
      <div className="bg-green-700 h-full p-6 flex items-center" >
        <FileArrowDown size={40}/>
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl" >Material complementar</strong>
        <p className="text-sm text-gray-200 mt-2" >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="h-full p-6 flex items-center" >
        <CaretRight size={24} />
      </div>

    </a>

    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" >
      <div className="bg-green-700 h-full p-6 flex items-center" >
        <FileArrowDown size={40}/>
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl" >Wallpapers</strong>
        <p className="text-sm text-gray-200 mt-2" >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="h-full p-6 flex items-center" >
        <CaretRight size={24} />
      </div>

    </a>

  </div>
    
      </div>
</div>



    )

}
import { useLoaderData } from 'react-router-dom'
function Github() {
    
    const data = useLoaderData();

  return (
    <>
      <div className='flex flex-col justify-center gap-5 items-center w-full h-screen p-5 md:flex-row'>
        <div className='flex flex-col justify-around items-start gap-2 '>
            <div className='border rounded-lg p-2'>
              <img className='max-w-24 max-h-24 rounded-full' src={data.avatar_url} alt="image"/>
            </div>
            <div>
            <p className='text-2xl text-gray-500'>User Name : {data.login}</p>
            <p className='text-2xl text-gray-500'>User Id : {data.id}</p>
            <p className='text-2xl text-gray-500'>E-mail :</p>
            </div>
            <div className='mt-5 w-1/2'>
            <p className='text-2xl text-gray-600 '>About</p> 
            <p className='text-sm text-gray-500'>{data.login} , is a software Engineer and full stack java developer and cruntly doing B.tech. For more Info. <a className='text-blue-500' href={data.html_url} target='blank'>github</a> </p>
            </div>   
            <div>
              
            </div>                    
        </div>
        <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/keshav220691')
    try {
        if(!response.ok) throw new Error("Response is not correct ");
        return response.json();
    } catch (error) {
        console.error("api not working")
    }

}
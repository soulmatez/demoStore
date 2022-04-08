const test_register = async () => {
  const uri = 'https://www.douyin.com/video/7030708809261714701';
  let extra_params = {
  	"search_id": "2021111608584501021208621424055C98",
  	"search_result_id": "7030708809261714701",
  	"search_type": "video",
  	"search_keyword": "新乡网络公司"
  }
  for (let i = 1000; i < 2000; i ++) {
    const searchParams = new URLSearchParams();
    searchParams.set('extra_params', `${extra_params}`)
    searchParams.set('modeFrom', 'searchResult')
    searchParams.set('previous_page', `search_result`)
    searchParams.set('search_keyword', '新乡网络公司')
    searchParams.set('search_cursor', `18`)
	searchParams.set('search_keyword', `新乡网络公司`)
    await fetch(uri, {
      method: 'POST',
      credentials: 'include',
      body: searchParams,
      headers: {
        "x-csrftoken": "OIYahxxxxxJfafHN0xxxxxxelc098L"
      }
    })
  }
}

test_register()